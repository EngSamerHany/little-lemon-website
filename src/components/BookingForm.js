import React from "react";
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

const BookingForm = () => {

    const {
        values,
        errors,
        touched,
        getFieldProps,
        handleSubmit,
        resetForm
    } = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            type: 'hireMe',
            comment: '',
        },
        onSubmit: async (values) => {
            event.preventDefault();
            submit(null, values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Required'),
            email: Yup.string().required('Required'),
            comment: Yup.string().required('Required'),
        }),
    });

    const availableTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ];

    return (
        <VStack>
            <Box>
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel htmlFor="res-date">Choose date</FormLabel>
                        <Input id="res-date" name="res-date" type="date" {...getFieldProps('res-date')}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="res-time">Choose time</FormLabel>
                        <Select id="res-time" name="res-time" {...getFieldProps('res-time')}>
                            {availableTimes.map(x => (
                                <option>x</option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="guests">Number of guests</FormLabel>
                        <Input id="guests" name="guests" type="number" placeholder="1" min="1" max="10" {...getFieldProps('guests')}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="occasion">Occasion</FormLabel>
                        <Select id="occasion" name="occasion" {...getFieldProps('occasion')}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </Select>
                        
                    </FormControl>
                    <Button type="submit" colorScheme="purple" width="full">
                        Make Your reservation
                    </Button>
                </form>
            </Box>
        </VStack>

    );

}

export default BookingForm;