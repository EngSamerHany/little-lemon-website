import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';


test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Booking");
    expect(headingElement).toBeInTheDocument();
});

test('Checks updateTimes result when the date is changed', () => {
  const handleChange = jest.fn();
  render(<BookingForm />);

  const rangeDate = screen.getByLabelText("/Choose date/");
  fireEvent.change(rangeDate, { target: { value: '2023-03-20' } });
  expect(handleChange).toHaveBeenCalled();
});