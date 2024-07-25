import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Blog" }, { name: "description", content: "A Simple Blog" }];
};

export default function Index() {
  return <div>Welcome</div>;
}
