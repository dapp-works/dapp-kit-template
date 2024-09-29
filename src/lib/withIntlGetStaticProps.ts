import { GetStaticProps, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { _ } from '@/lib/lodash';
import { Messages } from 'global';
import { InferGetStaticPropsType } from 'next/types';

interface StaticProps {
  messages?: Messages;
  [key: string]: any;
}

export function withIntlGetStaticProps<T extends StaticProps = StaticProps>(
  getAdditionalProps?: (context: GetStaticPropsContext) => Promise<T | {}>,
  options?: {
    revalidate?: number | boolean,
    fields?: [keyof Messages],
  }
): GetStaticProps<T> {
  return async function getStaticProps(context) {
    const { locale } = context;
    const allMessages = (await import(`@/messages/${locale}.json`)).default as Messages;
    const messages = options?.fields && options?.fields.length > 0 ? _.pick(allMessages, options?.fields) : allMessages;

    let additionalProps = {};
    if (typeof getAdditionalProps === 'function') {
      additionalProps = await getAdditionalProps(context);
    }

    return {
      props: {
        messages,
        ...additionalProps,
      },
      revalidate: options?.revalidate ?? false,
    } as GetStaticPropsResult<T>;
  };
}
