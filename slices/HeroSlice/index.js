import React from 'react'
import RichText from '../../components/RichText'
import CustomLink from '../../components/CustomLink'
import { PrismicImage, PrismicLink, PrismicRichText } from '@prismicio/react'
import { isTemplateExpression } from 'typescript'

/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
  <section className='section'>
    <div className='container'>
      {/* <pre>{JSON.stringify(slice, null, 2)}</pre> */}
      <RichText field={slice.primary.title} className="text-3xl font-bold bg-slate-500"/>
      <PrismicRichText field={slice.primary.description} /> 
      <PrismicImage field={slice.primary.image}/>
    </div>
    <div>
      {
        slice.items.map((item, i) => {
          <CustomLink link={item.cta_link} text={item.cta_text} key={i} />
  
        })
      }
    </div>
   
  </section>
)

export default HeroSlice