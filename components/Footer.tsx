import NextLink from 'next/link';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

type SingleFooterListItem = { label: string; url: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

export default function Footer({footer}:{footer:any}) {
  
  const footerItems: FooterItems = footer.map((section:any)=> {
    let footerSection = { 
      title: section?.fields?.title,
      items: []
    }
    footerSection.items = section?.fields?.items.map((item:any)=> {
      return {
        label: item?.fields?.label,
        url: item?.fields?.url
      }
    })
    return footerSection;
  });
  
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem, idx) => (
            <FooterList key={idx} {...singleItem} />
          ))}
        </ListContainer>
        <BottomBar>
          <ShareBar>
            {/* <NextLink href="https://www.twitter.com/my-saas-startup" passHref>
              <a>
                <TwitterIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.facebook.com/my-saas-startup" passHref>
              <a>
                <FacebookIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.linkedin.com/my-saas-startup" passHref>
              <a>
                <LinkedinIcon size={50} round={true} />
              </a>
            </NextLink> */}
          </ShareBar>
          <Copyright>&copy; Copyright 2024 PM Board</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem, idx) => (
        <ListItem key={idx} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ label, url }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={url} passHref>
        <a>{label}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
