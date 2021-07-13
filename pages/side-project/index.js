import Head from 'next/head'
import Layout from '../../components/Layout/Layout'
import Link from 'next/link'
import { request } from "../../lib/datocms";

const HOMEPAGE_QUERY = `query MyQuery {
  homePage {
    id
    title(locale: en)
    description(locale: en)
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 }
  });
  return {
    props: { data }
  };
}

export default function SideProject({ data }) {
  return <div>{JSON.stringify(data, null, 2)}</div>;
}
