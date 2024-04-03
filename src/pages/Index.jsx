import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaCoffee, FaShippingFast, FaLeaf } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.800" minHeight="100vh" display="flex" alignItems="center" justifyContent="center" backgroundImage="https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzEyMTMyMzY4fDA&ixlib=rb-4.0.3&q=80&w=1080" backgroundSize="cover" backgroundPosition="center">
        <Container maxW="container.lg" textAlign="center" color="white">
          <Heading as="h1" size="4xl" mb={6}>
            Welcome to Our Coffee Shop
          </Heading>
          <Text fontSize="xl" mb={8}>
            Discover the rich flavors and aroma of our handcrafted coffee
          </Text>
          <Stack direction={["column", "row"]} spacing={4} justify="center">
            <Button colorScheme="brown" size="lg">
              Order Now
            </Button>
            <Button colorScheme="brown" size="lg">
              Learn More
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <SimpleGrid columns={[1, null, 3]} spacing={10}>
            <Box textAlign="center">
              <Icon as={FaCoffee} boxSize={12} color="teal.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Premium Coffee
              </Heading>
              <Text>We source the finest coffee beans from around the world to ensure the best quality and taste.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaShippingFast} boxSize={12} color="teal.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Fast Delivery
              </Heading>
              <Text>Enjoy the convenience of fast delivery right to your doorstep. Get your coffee fix in no time.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaLeaf} boxSize={12} color="teal.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Sustainable Practices
              </Heading>
              <Text>We are committed to sustainable practices, using eco-friendly packaging and supporting fair trade.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="2xl" mb={6}>
            Ready to Try Our Coffee?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Visit our shop or order online for a delightful coffee experience.
          </Text>
          <Button colorScheme="brown" size="lg">
            Get Started
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
