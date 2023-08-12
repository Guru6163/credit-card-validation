import React,{useState} from "react";
import StickyHeader from "./Header";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useFormik } from "formik";
import * as Yup from "yup";

const Home = () => {
    const [savedCards, setSavedCards] = useState([]);

    const handleSaveCard = (values) => {
        const newCard = {
            cardholderName: values.cardholderName,
            cardNumber: values.creditCardNumber,
            expirationDate: `${values.expirationMonth}/${values.expirationYear}`,
            cvv: values.cvv,
        };
        console.log(newCard)
        // Update savedCards using setSavedCards to trigger re-render
        setSavedCards((prevSavedCards) => [...prevSavedCards, newCard]);
        
    };


    const monthOptions = [
        { label: "Select Month", value: "" },
        { label: "January", value: "01" },
        { label: "February", value: "02" },
        { label: "March", value: "03" },
        { label: "April", value: "04" },
        { label: "May", value: "05" },
        { label: "June", value: "06" },
        { label: "July", value: "07" },
        { label: "August", value: "08" },
        { label: "September", value: "09" },
        { label: "October", value: "10" },
        { label: "November", value: "11" },
        { label: "December", value: "12" },
    ];

    const validationSchema = Yup.object().shape({
        cardholderName: Yup.string().required("Cardholder Name is required"),
        creditCardNumber: Yup.string()
            .required("Credit Card Number is required")
            .matches(/^[0-9]{16}$/, "Invalid Credit Card Number"),
        expirationMonth: Yup.string().required("Expiration Month is required"),
        expirationYear: Yup.string()
            .required("Expiration Year is required")
            .matches(/^[0-9]{4}$/, "Invalid Expiration Year"),
        cvv: Yup.string()
            .required("CVV is required")
            .matches(/^[0-9]{3,4}$/, "Invalid CVV"),
    });

    const formik = useFormik({
        initialValues: {
            cardholderName: "",
            creditCardNumber: "",
            expirationMonth: "",
            expirationYear: "",
            cvv: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleSaveCard(values);
            formik.resetForm();
        },
    });

    return (
        <div className="bg-white min-h-screen">
            <StickyHeader />
            <div className="flex m-4">
                {/* Credit Card Information Form */}
                <div className="w-2/3 p-8">
                    <form
                        className="bg-gray-100 p-6 rounded-lg"
                        onSubmit={formik.handleSubmit}
                    >
                        <div className="mb-4">
                            <label className="font-bold block mb-2">Cardholder Name</label>
                            <InputText
                                type="text"
                                name="cardholderName"
                                value={formik.values.cardholderName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Enter cardholder name"
                                className="w-full p-inputtext-sm"
                            />
                            {formik.touched.cardholderName && formik.errors.cardholderName ? (
                                <div className="text-red-500">
                                    {formik.errors.cardholderName}
                                </div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="creditCardNumber"
                                className="font-bold block mb-2"
                            >
                                Credit Card Number
                            </label>
                            <InputText
                                id="creditCardNumber"
                                type="text"
                                maxLength={16}
                                name="creditCardNumber"
                                value={formik.values.creditCardNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Enter card number"
                                className="w-full p-inputtext-sm"
                            />
                            {formik.touched.creditCardNumber &&
                                formik.errors.creditCardNumber ? (
                                <div className="text-red-500">
                                    {formik.errors.creditCardNumber}
                                </div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="expirationMonth" className="font-bold block mb-2">
                                Expiration Month
                            </label>
                            <Dropdown
                                id="expirationMonth"
                                name="expirationMonth"
                                value={formik.values.expirationMonth}
                                options={monthOptions}
                                onChange={(e) =>
                                    formik.setFieldValue("expirationMonth", e.value)
                                }
                                placeholder="Select Month"
                                className="w-full p-inputtext-sm"
                            />
                            {formik.touched.expirationMonth &&
                                formik.errors.expirationMonth ? (
                                <div className="text-red-500">
                                    {formik.errors.expirationMonth}
                                </div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="expirationYear" className="font-bold block mb-2">
                                Expiration Year
                            </label>
                            <InputMask
                                id="expirationYear"
                                name="expirationYear"
                                value={formik.values.expirationYear}
                                onChange={(e) =>
                                    formik.setFieldValue("expirationYear", e.value)
                                }
                                onBlur={formik.handleBlur}
                                className="w-full p-inputtext-sm"
                                mask="9999"
                                placeholder="YYYY"
                            />
                            {formik.touched.expirationYear && formik.errors.expirationYear ? (
                                <div className="text-red-500">
                                    {formik.errors.expirationYear}
                                </div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label className="font-bold block mb-2">CVV</label>
                            <InputText
                                type="text"
                                name="cvv"
                                value={formik.values.cvv}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="CVV"
                                maxLength={3}
                                className="w-full p-inputtext-sm"
                            />
                            {formik.touched.cvv && formik.errors.cvv ? (
                                <div className="text-red-500">{formik.errors.cvv}</div>
                            ) : null}
                        </div>
                        <button
                            type="submit"
                            className=" col-span-2 p-2  bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                        >
                            Verify Card Details
                        </button>
                    </form>
                </div>
                {/* Saved Credit Cards */}
                <div className="w-1/3 p-6">
                    <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Verified Credit Cards</h2>
                    {savedCards.map((card, index) => (
                        <div key={index} className="mb-4 p-4 border bg-white rounded-md">
                            <p className="font-semibold text-lg">{card.cardholderName}</p>
                            <p className="text-gray-600 mb-2">
                                Card Number: **** **** **** {card.cardNumber.slice(-4)}
                            </p>
                            <p className="text-gray-600">
                                Expiration Date: {card.expirationDate}
                            </p>
                        </div>
                    ))}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;
