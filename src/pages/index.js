import React from 'react'
import { Button, Text } from '@nextui-org/react';
import { css } from '@nextui-org/react';
import { motion } from "framer-motion"

const Home = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios.get('https://hellofaizan.me/api/lanyard', {
  //     method: 'GET',
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);
  //TODO Need to Handle Cors Error

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}>
        <p className="text-3xl font-bold underline">
          Hello World
        </p>
        <Button
          auto
          as="a"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/nextui-org/nextui"
          css={{
            borderRadius: '$xs', // radii.xs
            border: '$space$1 solid transparent',
            background: '$pink800', // colors.pink800
            color: '$pink100',
            height: '$12', // space[12]
            boxShadow: '$md', // shadows.md
            '&:hover': {
              background: '$pink100',
              color: '$pink800',
            },
            '&:active': {
              background: '$pink200',
            },
            '&:focus': {
              borderColor: '$pink400',
            },
          }}>Click me</Button>

<Text
      h1
      size={60}
      css={{
        textGradient: "45deg, $blue600 -20%, $pink600 50%",
      }}
      weight="bold"
    >
      Let&apos;s
    </Text>
    <Text
      h1
      size={60}
      css={{
        textGradient: "45deg, $purple600 -20%, $pink600 100%",
      }}
      weight="bold"
    >
      Make the Web
    </Text>
    <Text
      h1
      size={60}
      css={{
        textGradient: "45deg, $yellow600 -20%, $red600 100%",
      }}
      weight="bold"
    >
      Prettier
    </Text>

      </motion.div>
    </>
  )
}


export default Home