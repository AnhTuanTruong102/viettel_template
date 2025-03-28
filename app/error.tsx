"use client";

import EmptyState from "@/components/EmptyState";
import { useEffect } from "react";

type Props = {
  error: Error;
};

function ErrorState({ error }: Props) {
  useEffect(() => {
    console.log("🚀 ~ file: error.tsx:12 ~ ErrorState ~ error:", error);
  }, [error]);

  return <EmptyState title="Rất tiếc" subtitle="Đã có lỗi xảy ra!" />;
}

export default ErrorState;
