import {
  Box,
  CloseButton,
  Flex,
  Image,
  Select,
  Stack,
  Text,
  useColorMode as mode,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addCartItem, removeCartItem } from "../redux/actions/cartActions";

const CartItem = ({ cartItem }) => {
  const { name, image, price, stock, qty, id } = cartItem;
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(addCartItem(id, event.target.value));
  };

  const handleRemove = (id) => () => dispatch(removeCartItem(id));

  return (
    <Flex direction={{ base: "column", md: "row" }} justify={"space-between"} align={"center"}>
      <Stack direction="row" spacing="5" width={"full"}>
        <Image
          rounded={"lg"}
          w={"120px"}
          h="120px"
          fit={"cover"}
          src={image}
          alt={name}
          draggable="false"
          loading="lazy"
        />
        <Box pt={"4"}>
          <Stack spacing={"0.5"}>
            <Text fontWeight={"medium"}>{name}</Text>
          </Stack>
        </Box>
      </Stack>
      <Flex
        w={"full"}
        mt={{ base: "4", md: "0" }}
        align={{ vase: "center", md: "baseline" }}
        justify={"space-between"}
        display={"flex"}
      >
        <Select
          maxW={"64px"}
          focusBorderColor={mode("orange.500", "orange.200")}
          value={qty}
          onChange={handleChange}
        >
          {[...Array(stock).keys()].map((item) => (
            <option key={item + 1} value={item + 1}>
              {item + 1}
            </option>
          ))}
        </Select>
        <Text fontWeight={"bold"}>${price}</Text>
        <CloseButton onClick={handleRemove(id)} />
      </Flex>
    </Flex>
  );
};

export default CartItem;