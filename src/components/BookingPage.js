import React from "react";
import BookingForm from "./BookingForm"
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";

const BookingPage = (props) => {

    return (
        <VStack p={32}>
            <h1>Booking</h1>
            <BookingForm {...props}/>
        </VStack>
    );
}

export default BookingPage;