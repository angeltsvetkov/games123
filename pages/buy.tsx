import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { InferGetStaticPropsType } from 'next';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import { getSite } from 'lib/siteFetcher';
import { getImageUrl } from 'utils/getImageUrl';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import FaqSection from 'views/PricingPage/FaqSection';

export default function Buy({ site }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Wrapper>
      <iframe src="https://delivery.econt.com/buy/bvcfu" width="100%" height="1000rem"></iframe>
      {/* <FaqSection /> */}
    </Wrapper>
  );
}

export async function getStaticProps() {
  return {
    props: {
      site: await getSite(),
    },
  };
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;