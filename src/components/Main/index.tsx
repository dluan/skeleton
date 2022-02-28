import { Heading, Image, Text, VStack } from '@chakra-ui/react'

const Main = ({
  title = 'Esqueleto de Next JS',
  description = 'TypeScript, ReactJS, NextJS, Styled Components e Chakra UI'
}) => (
  <VStack
    bg={'#06092b'}
    color="white"
    w={'full'}
    height="100vh"
    p={12}
    textAlign="center"
    spacing={8}
  >
    <Heading as="h2">{title}</Heading>
    <Text>{description}</Text>
    <Image
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
      boxSize={'30rem'}
    />
  </VStack>
)

export default Main
