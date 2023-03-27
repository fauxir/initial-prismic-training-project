import { SliceZone } from '@prismicio/react'
import { createClient } from '/home/michael/Desktop/Training/Training/prismic-mock/prismicio.js'
import { components } from '/home/michael/Desktop/Training/Training/prismic-mock/slices'

export default function Page({ page }) {
  return <SliceZone slices={page.data.slices} components={components} />
}

export async function getStaticProps({ previewData}) {
  const client = createClient({ previewData })

  const page = await client.getSingle('homepage')

  return {
    props: {
      page,
    },
  }
}