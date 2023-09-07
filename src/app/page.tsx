'use client';
import { JSONMetricsView, JSONSchemaTableState, JSONTable, PaginationState } from "@dappworks/jsonview"
import { useEffect } from "react";
import { PWAInstallElement } from '@khmyznikov/pwa-install';
import { html, render } from 'lit-html';
import React from "react";
const table = new JSONSchemaTableState({
  columns: [{
    key: "nonce",
    label: "NONCE",
  }, {
    key: "destination",
    label: "DESTINATION"
  }],
  dataSource: new Array(100).fill(0).map((_, i) => ({
    nonce: i,
    destination: '0x' + Math.floor(Math.random() * 100
    ).toString(16),
  })),
  rowKey: "id",
  pagination: new PaginationState({
    page: 1,
    limit: 8
  }),
})

export default function HomePage() {
  const renderPWAInstallElement = () => {
    const pwaInstallElement = new PWAInstallElement();
    pwaInstallElement.manifestUrl = '/manifest.json';
    const templateResult = pwaInstallElement.render();
    return templateResult;
  };

  const containerRef = React.useRef();

  React.useEffect(() => {
    const templateResult = renderPWAInstallElement();
    // @ts-ignore 
    render(templateResult, containerRef.current);
    //@ts-ignore
    console.log(containerRef.current.showDialog(true))
  }, []);
  return (
    <main className="p-10">
      {/* @ts-ignore  */}
      <pwa-install ref={containerRef}>
        {/* @ts-ignore  */}
      </pwa-install>
    </main>
  );
}
