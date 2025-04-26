import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4f6fa;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
`;

const Card = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 600px;
  text-align: center;
`
const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: #000;
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 1.5rem;
`;

const Separator = styled.hr`
  width: 60%;
  margin: 1rem auto;
  border: none;
  border-top: 3px solid #222;
`;

const RingWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 2rem auto;
`;

const RotatingRing = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(#6a11cb, rgb(109, 109, 184), #6a11cb);
  animation: spin 4s linear infinite;
  box-shadow: 0 0 25px rgba(106, 17, 203, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;


const InnerCircle = styled(motion.div)`
  position: absolute;
  top: 20%;
  left: 21%;
  width: 120px;
  height: 120px;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.3rem;
  z-index: 2;
`;

const ButtonWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  background: white;
  border-radius: 12px;
  padding: 12px 20px;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.15);
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 10px #aaa;
  }
`;

const ConnectButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const CircleIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #222;
  color: white;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Disclaimer = styled(motion.p)`
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #666;
`;

const Onboardingcomponents = () => {
  return (
    <Container>
      <Card
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Heading>Ah!!, I never saw someone from your Company.</Heading>
        <Separator />

        <RingWrapper>
          <RotatingRing />
          <InnerCircle
            animate={{ scale: [1, 1.05, 1], opacity: [1, 0.9, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
          >
            Welcome!!
          </InnerCircle>
        </RingWrapper>

        <ButtonWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <Button>Browse Test Data</Button>
          <ConnectButton>
            <CircleIcon>+</CircleIcon>
            Connect Domain
          </ConnectButton>
        </ButtonWrapper>

        <Disclaimer
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          **Tenant Connections are not allowed in free tier, however you can
          still explore the website features.
        </Disclaimer>
      </Card>
    </Container>
  );
};

export default Onboardingcomponents;
