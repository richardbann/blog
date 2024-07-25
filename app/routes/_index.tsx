import type { MetaFunction } from "@remix-run/node";
import { db } from "../../app/drizzle/config.server";
import { items } from "../../app/drizzle/schema.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Blog" }, { name: "description", content: "A Simple Blog" }];
};

export async function loader() {
  const data = db.select().from(items).all();
  return json(data);
}

export default function Index() {
  const items = useLoaderData<typeof loader>();
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {items.map((i) => (
          <tr key={i.id}>
            <td>{i.title}</td>
            <td>{i.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
