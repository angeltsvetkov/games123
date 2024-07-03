import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';
import AutofitGrid from 'components/AutofitGrid';
import SectionTitle from 'components/SectionTitle';
import Image from 'next/image'
import Input from 'components/Input';
import Button from 'components/Button';
import MailSentState from '../../components/MailSentState';

interface EmailPayload {
  name: string;
  phone: string;
  address: string;
}
export default function Buy
  ({ title, imageUrl, price }: { title: any, imageUrl: any, price: any }) {

  const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitSuccessful, isSubmitting, isSubmitted, errors } = formState;

  async function onSubmit(payload: EmailPayload) {
    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbyQu-29U5vA7jKw7RH3sPubF_mdKhVTOpOT7gzFbiaEUjY_x0dyU6zI0IxgGwxj0r01Cg/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (res.status !== 204) {
        setHasErrored(true);
      }
    } catch {
      setHasErrored(true);
      return;
    }

    setHasSuccessfullySentMail(true);
  }

  const isSent = isSubmitSuccessful && isSubmitted;
  const isDisabled = isSubmitting || isSent;
  const isSubmitDisabled = Object.keys(errors).length > 0 || isDisabled;

  if (hasSuccessfullySentMail) {
    return <MailSentState />;
  }
  return (
    <Container id="buy">
      <SectionTitle>{title}</SectionTitle>
      <CustomAutofitGrid>
        {imageUrl && <ImageContainer>
          <Image
            src={imageUrl}
            alt="test"
            width="400"
            height="400"
          />
        </ImageContainer>}
        <FormContainer>
          <Price>{price}</Price>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {hasErrored && <ErrorMessage>Couldn&apos;t send email. Please try again.</ErrorMessage>}
            <InputGroup>
              <InputStack>
                {errors.name && <ErrorMessage>Моля да предоставите име и фамилия.</ErrorMessage>}
                <Input placeholder="Име и Фамилия" id="name" disabled={isDisabled} {...register('name', { required: true })} />
              </InputStack>
              <InputStack>
                {errors.email && <ErrorMessage>Моля да предоставите телефона.</ErrorMessage>}
                <Input placeholder="Телефон" id="phone" disabled={isDisabled} {...register('phone', { required: true })} />
              </InputStack>
            </InputGroup>
            <InputStack>
              {errors.description && <ErrorMessage>Моля да предоставите адрес за доставка</ErrorMessage>}
              <Textarea
                as="textarea"
                placeholder="Адрес за доставка"
                id="description"
                disabled={isDisabled}
                {...register('address', { required: true })}
              />
            </InputStack>
            <p>* Предоставените данни ще бъдат предоставени на ЕКОНТ ЕКСПРЕС АД за целите на доставката и изтрити.</p>
            <Button as="button" type="submit" disabled={isSubmitDisabled}>
              ПОРЪЧАЙ
            </Button>
          </Form>
        </FormContainer>
      </CustomAutofitGrid>
    </Container>
    // <CtaWrapper>
    //   <Container>
    //     <Stack>
    //       <SectionTitle>{title}</SectionTitle>
    //       <Price>{price}</Price>
    //       {imageUrl && <ImageContainer>
    //         <Image
    //           src={imageUrl}
    //           alt="test"
    //           width="400"
    //           height="400"
    //         />
    //       </ImageContainer>}
    //       {/* <ButtonGroup>
    //         {primaryCta && <ButtonLink url={primaryCta?.url} label={primaryCta?.label} event="Buy-CTA" type="outlined" />}
    //       </ButtonGroup> */}
    //     </Stack>
    //   </Container>
    // </CtaWrapper>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  padding-top: 5rem;
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Price = styled.div`
  color: rgb(var(--textPrimary));
  font-size: xxx-large;
  font-weight: 600;
`;

const FormContainer = styled.div`
  color: rgb(var(--textPrimary));
  padding: 2rem;
`;

const Form = styled.form`
  & > * {
    margin-bottom: 2rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 2rem;
  }

  & > * {
    flex: 1;
  }

  ${media('<=tablet')} {
    flex-direction: column;
    & > *:first-child {
      margin-right: 0rem;
      margin-bottom: 2rem;
    }
  }
`;

const InputStack = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
`;

const Textarea = styled(Input)`
  width: 100%;
  min-height: 20rem;
`;

