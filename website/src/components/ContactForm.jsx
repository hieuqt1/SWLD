import { useState, useEffect } from "react";
import {
  Button,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ContactForm() {
  const collapsedView = useMediaQuery("(min-width:480px)");
  const [formResponse, setFormResponse] = useState({
    name: "",
    email: "",
    contactReason: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const contactReasons = [
    "Booking",
    "Join the Team",
    "General Inquiry",
    "Other",
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormResponse({ ...formResponse, [name]: value });
    value === ""
      ? setErrors({ ...errors, [name]: true })
      : setErrors({ ...errors, [name]: false });
  };

  const isFormIncomplete = Object.values(formResponse).some(
    (value) => value === ""
  );

  const handleFormSubmit = async () => {
    try {
      const response = await fetch("/contactform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formResponse),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Failed to fetch form data:", error);
    }
    console.log("form response", formResponse);
  };

  return (
    <>
      {!submitted ? (
        <form action={handleFormSubmit}>
          <Grid2
            container
            spacing={4}
            alignItems={"center"}
          >
            {collapsedView ? (
              <>
                <Grid2 size={4} justifyItems={"end"}>
                  <InputLabel>Name:</InputLabel>
                </Grid2>
                <Grid2 size={8}>
                  <TextField
                    variant="outlined"
                    name="name"
                    required
                    error={errors.name}
                    value={formResponse.name}
                    onChange={handleFormChange}
                    sx={{ width: "80%" }}
                  />
                </Grid2>

                <Grid2 size={4} justifyItems={"end"}>
                  <InputLabel>Email:</InputLabel>
                </Grid2>
                <Grid2 size={8}>
                  <TextField
                    variant="outlined"
                    name="email"
                    required
                    error={errors.email}
                    value={formResponse.email}
                    onChange={handleFormChange}
                    sx={{
                      width: "80%",
                    }}
                  />
                </Grid2>
                <Grid2 size={4} justifyItems={"end"}>
                  <InputLabel>Reason for Contact:</InputLabel>
                </Grid2>
                <Grid2 size={8}>
                  <Select
                    variant="outlined"
                    name="contactReason"
                    required
                    error={errors.contactReason}
                    value={formResponse.contactReason}
                    onChange={handleFormChange}
                    sx={{ width: "80%" }}
                  >
                    {contactReasons.map((reason) => (
                      <MenuItem value={reason}>{reason}</MenuItem>
                    ))}
                  </Select>
                </Grid2>
                <Grid2 size={4} justifyItems={"end"}>
                  <InputLabel>Message:</InputLabel>
                  <InputLabel
                    sx={{
                      textWrap: "wrap",
                      fontSize: "0.75rem",
                      textAlign: "right",
                    }}
                  >
                    For bookings, please provide details such as date, time, location, and occasion.
                  </InputLabel>
                </Grid2>
                <Grid2 size={8}>
                  <TextField
                    variant="outlined"
                    name="message"
                    multiline
                    required
                    error={errors.message}
                    value={formResponse.message}
                    onChange={handleFormChange}
                    sx={{
                      width: "80%",
                      // maxHeight: "8rem",
                      overflow: "scroll",
                      "&::-webkit-scrollbar": {
                        display: "none",
                      },
                      "-ms-overflow-style": "none" /* IE and Edge */,
                      "scrollbar-width": "none" /* Firefox */,
                    }}
                  />
                </Grid2>
              </>
            ) : (
              <>
                <Grid2 container size={12} spacing={1}>
                  <InputLabel sx={{ justifySelf: "start" }}>Name:</InputLabel>
                  <TextField
                    variant="outlined"
                    name="name"
                    required
                    error={errors.name}
                    value={formResponse.name}
                    onChange={handleFormChange}
                    sx={{ width: "100%" }}
                  />
                </Grid2>
                <Grid2 container size={12} spacing={1}>
                  <InputLabel sx={{ justifySelf: "start" }}>Email:</InputLabel>
                  <TextField
                    variant="outlined"
                    name="email"
                    required
                    error={errors.email}
                    value={formResponse.email}
                    onChange={handleFormChange}
                    sx={{ width: "100%" }}
                  />
                </Grid2>
                <Grid2 container size={12} spacing={1}>
                  <InputLabel sx={{ justifySelf: "start" }}>
                    Reason for Contact:
                  </InputLabel>
                  <Select
                    variant="outlined"
                    name="contactReason"
                    required
                    error={errors.contactReason}
                    value={formResponse.contactReason}
                    onChange={handleFormChange}
                    sx={{ width: "100%" }}
                  >
                    {contactReasons.map((reason) => (
                      <MenuItem value={reason}>{reason}</MenuItem>
                    ))}
                  </Select>
                </Grid2>
                <Grid2 container size={12} spacing={1}>
                  <InputLabel sx={{ justifySelf: "start" }}>
                    Message:
                  </InputLabel>
                  <InputLabel
                    sx={{
                      textWrap: "wrap",
                      fontSize: "0.75rem",
                      textAlign: "left",
                    }}
                  >
                    For bookings, please provide details such as date, time, location, and occasion.
                  </InputLabel>
                  <TextField
                    variant="outlined"
                    name="message"
                    required
                    error={errors.message}
                    multiline
                    value={formResponse.message}
                    onChange={handleFormChange}
                    sx={{
                      width: "100%",
                      overflow: "scroll",
                      "&::-webkit-scrollbar": {
                        display: "none",
                      },
                      "-ms-overflow-style": "none" /* IE and Edge */,
                      "scrollbar-width": "none" /* Firefox */,
                    }}
                  />
                </Grid2>
              </>
            )}

            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: "100%",
                // backgroundColor: "primary.contrastText",
                // color: "secondary.main",
                position: "relative",
                "&:hover": {
                  backgroundColor: "#B20000",
                },
                transition: "ease-in-out 0.2s",
              }}
              type="submit"
              disableRipple
              disableElevation
              disabled={isFormIncomplete}
            >
              Submit
            </Button>
          </Grid2>
        </form>
      ) : (
        <Box sx={{ maxHeight: collapsedView ? "80vh" : "40vh" }}>
          <h1>Thank you for booking with us!</h1>
        </Box>
      )}
    </>
  );
}
