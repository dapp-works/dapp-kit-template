"use client"
import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export default function Loading() {
  return <div className="w-full h-full p-6">
    <Skeleton className="rounded-lg h-6 w-12">
      <div className="h-6 w-8 rounded-lg bg-default-300"></div>
    </Skeleton>

    <Skeleton className="rounded-lg h-6 w-18 mt-4">
      <div className="h-6 w-8 rounded-lg bg-default-300"></div>
    </Skeleton>

    <div className="grid grid-cols-3 gap-4 mt-4">
      {
        new Array(3).fill(null).map(i => {
          // ts-ignore
          return <Card className="w-full space-y-5 p-4" >
            <Skeleton className="rounded-lg">
              <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </div>
          </Card>
        })
      }
    </div>

    <div className="grid grid-cols-2 gap-4 mt-4">
      {
        new Array(2).fill(null).map(i => {
          // ts-ignore
          return <Card className="w-full space-y-5 p-4" >
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </div>
            <Skeleton className="rounded-lg">
              <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
          </Card>
        })
      }
    </div>
  </div>
}