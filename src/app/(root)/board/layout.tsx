import { Metadata } from "next";

export const metadata: Metadata = {
  title: "You can do it! - 질문 및 후기",
  description: "질문 및 후기",
};

export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[1000px] min-h-[780px] bg-default-color p-10 m-0 mt-auto mb-auto">
        {children}
      </div>
    </div>
  )
}
