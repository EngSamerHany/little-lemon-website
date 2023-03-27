import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik";
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
import * as Yup from 'yup';

const BookingForm = (props) => {

    const navigate = useNavigate();
    const {
        values,
        errors,
        touched,
        getFieldProps,
        handleSubmit,
        resetForm,
        isValid,
    } = useFormik({
        initialValues: {
            'res-date': '',
            'res-time': '',
            'guests': '1',
            'occasion': '',
        },
        onSubmit: async (values) => {
            console.log(values);
            if (props.submitForm(values)) {
                navigate("/confirmed-booking");
            }
        },
        validationSchema: Yup.object({
            'res-date': Yup.string().required('Required'),
            'res-time': Yup.string().required('Required'),
            'guests': Yup.number().positive().required('Required'),
            'occasion': Yup.string().required('Required'),
        }),
    });


    return (
        <VStack>
            <Box>
                <form onSubmit={handleSubmit}>
                    <VStack spacing={20}>
                        <FormControl w="100%">
                            <FormLabel htmlFor="res-date">Choose date</FormLabel>
                            <Input
                                id="res-date"
                                name="res-date"
                                type="date"
                                w="100%"
                                {...getFieldProps('res-date')}
                                // onChange={e => props.dispatch({date: e.target.value})}
                            />
                            <FormErrorMessage>{errors['res-date']}</FormErrorMessage>
                        </FormControl>
                        <FormControl w="100%">
                            <FormLabel htmlFor="res-time">Choose time</FormLabel>
                            <Select id="res-time" name="res-time" {...getFieldProps('res-time')} w="100%">
                                <option value=""></option>
                                {props.availableTimes.map((x, i) => (
                                    <option key={i} value={x}>{x}</option>
                                ))}
                            </Select>
                            <FormErrorMessage>{errors['res-time']}</FormErrorMessage>
                        </FormControl>
                        <FormControl w="100%">
                            <FormLabel htmlFor="guests">Number of guests</FormLabel>
                            <Input id="guests" name="guests" type="number" placeholder="1" min="1" max="10" {...getFieldProps('guests')} w="100%"/>
                            <FormErrorMessage>{errors['guests']}</FormErrorMessage>
                        </FormControl>
                        <FormControl w="100%">
                            <FormLabel htmlFor="occasion">Occasion</FormLabel>
                            <Select id="occasion" name="occasion" {...getFieldProps('occasion')} isInvalid={errors.occasion} w="100%">
                                <option value=""></option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </Select>
                            <FormErrorMessage>{errors.occasion}</FormErrorMessage>
                        </FormControl>
                        <Button type="submit" colorScheme="purple" width="full" disabled={!isValid}>
                            Make Your reservation
                        </Button>
                    </VStack>
                </form>
            </Box>
        </VStack>
    );

}

export default BookingForm;