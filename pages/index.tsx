import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import WaveCta from 'components/WaveCta';
import { getSite } from 'lib/siteFetcher';
import { NavItems } from 'types';
import { getImageUrl } from 'utils/getImageUrl';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import Games from 'views/HomePage/Games';
import YoutubeVideo from 'components/YoutubeVideo';

export default function Homepage({ site }: InferGetStaticPropsType<typeof getStaticProps>) {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p className='pt-5'>{children}</p>,
      [BLOCKS.UL_LIST]: (node: any, children: any) => (
        <ul className="pt-20">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: any) => (
        <ol>{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li><span>{children}</span></li>,
    },
  };
  if(!site.navigation){
    site.navigation = [];
  }
  const navItems: NavItems = site.navigation.map(((navItem: { fields: { label: any; url: any; }; }) => {
    return {
      label: navItem?.fields?.label,
      url: navItem?.fields?.url
    }
  }));
  console.log(site)
  return (
    <>
      <Head>
        <title className='bg-red-400'>{site.title}</title>
        <meta
          name="description"
          content={site.subtitle}
        />
        <link rel="icon" type="image/png" href={getImageUrl(site.favicon)} />
      </Head>
      {site.navigation.length > 0 && <Navbar items={navItems} logo={site.logo} />}
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero title={site.title} price={site.price} pricingHint={site.pricingHint} subtitle={site.subtitle} tag="productivity" image={getImageUrl(site?.heroImage)} primaryCta={site?.buttons[0]?.fields} secondaryCta={site?.buttons[1]?.fields} />
          {site?.references?.fields?.enabled && <Partners label={site?.references?.fields?.label} images={site?.references?.fields?.images} />}
          {site?.sections?.map((section: { fields: { image: any; title: string; tag: string; imagePosition: string; content: Document; }; }, index: number) => {
            return <BasicSection key={index} imageUrl={getImageUrl(section?.fields?.image)!} title={section?.fields?.title} overTitle={section?.fields?.tag} reversed={section?.fields?.imagePosition === "right"}>
              {documentToReactComponents(section?.fields?.content, options)}
            </BasicSection>
          }
          )}
          <Games list={site?.games} primaryCta={site?.buttons[0]?.fields}/>
          {site?.usecases && <FeaturesGallery title="How does it work?" tag="" tabs={site?.usecases} />}
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <YoutubeVideo videoId={site.youtubeUrl}></YoutubeVideo>
          <Cta title={site?.cta?.fields?.title} tag={site?.cta?.fields?.tag} content={documentToReactComponents(site?.cta?.fields?.content)} primaryCta={site?.cta?.fields?.buttons[0]?.fields} secondaryCta={site?.cta?.fields?.buttons[1]?.fields} />
          <Features features={site.features} />
          {/* <Testimonials /> */}
          {/* <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
      {/* <WaveCta /> */}
      <Footer footer={site.footer} />
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      site: await getSite(),
    },
  };
}
