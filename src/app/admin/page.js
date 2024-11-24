"use client";
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CldUploadWidget } from "next-cloudinary";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const verifyPassword = async () => {
    const res = await fetch("/api/verifyPassword", {
      method: "POST",
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (data.verified) {
      setIsVerified(true);
    } else {
      alert("Wrong Password");
      setPassword("");
    }
  };

  const handleAddPhoto = async (url, albumName) => {
    setIsSubmitting(true);
    const res = await fetch("/api/addPhotos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, albumName }),
    });

    const data = await res.json();
    if (!data.status == 200) {
      alert("There was an error submitting your request. Please try again.");
      setIsSubmitting(false);
      return;
    }
    setIsSubmitted(true);
    setIsSubmitting(false);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <div className="admin">
      {isVerified ? (
        <>
          <h1>Admin Panel</h1>
          <br />
          <hr />
          <div className="addingButtons">
            <CldUploadWidget
              options={{ sources: ["local"], multiple: true }}
              signatureEndpoint="/api/sign-image"
              onSuccess={(result, { widget }) => {
                handleAddPhoto(result.info.secure_url, "Engagement");
              }}
              onError={(error, { widget }) => {
                alert("Failed to upload : File Size is larger than 10MB !");
              }}
              onQueuesEnd={(result, { widget }) => {
                widget.close();
              }}
            >
              {({ open }) => {
                return (
                  <Button onClick={() => open()} variant="dark">
                    {isSubmitting
                      ? "Submitting.."
                      : isSubmitted
                      ? "Submitted."
                      : "Upload Engagement Images 🖼️"}
                  </Button>
                );
              }}
            </CldUploadWidget>
            <CldUploadWidget
              options={{ sources: ["local"], multiple: true }}
              signatureEndpoint="/api/sign-image"
              onSuccess={(result, { widget }) => {
                handleAddPhoto(result.info.secure_url, "Tilak");
              }}
              onError={(error, { widget }) => {
                alert("Failed to upload : File Size is larger than 10MB !");
              }}
              onQueuesEnd={(result, { widget }) => {
                widget.close();
              }}
            >
              {({ open }) => {
                return (
                  <Button onClick={() => open()} variant="warning">
                    {isSubmitting
                      ? "Submitting.."
                      : isSubmitted
                      ? "Submitted."
                      : "Upload Tilak Images 🖼️"}
                  </Button>
                );
              }}
            </CldUploadWidget>
            <CldUploadWidget
              options={{ sources: ["local"], multiple: true }}
              signatureEndpoint="/api/sign-image"
              onSuccess={(result, { widget }) => {
                handleAddPhoto(result.info.secure_url, "Pre-Wedding");
              }}
              onError={(error, { widget }) => {
                alert("Failed to upload : File Size is larger than 10MB !");
              }}
              onQueuesEnd={(result, { widget }) => {
                widget.close();
              }}
            >
              {({ open }) => {
                return (
                  <Button onClick={() => open()} variant="success">
                    {isSubmitting
                      ? "Submitting.."
                      : isSubmitted
                      ? "Submitted."
                      : "Upload Pre-Wedding Images 🖼️"}
                  </Button>
                );
              }}
            </CldUploadWidget>
            <CldUploadWidget
              options={{ sources: ["local"], multiple: true }}
              signatureEndpoint="/api/sign-image"
              onSuccess={(result, { widget }) => {
                handleAddPhoto(result.info.secure_url, "Haldi & Mehndi");
              }}
              onError={(error, { widget }) => {
                alert("Failed to upload : File Size is larger than 10MB !");
              }}
              onQueuesEnd={(result, { widget }) => {
                widget.close();
              }}
            >
              {({ open }) => {
                return (
                  <Button onClick={() => open()} variant="info">
                    {isSubmitting
                      ? "Submitting.."
                      : isSubmitted
                      ? "Submitted."
                      : "Upload Haldi & Mehndi Images 🖼️"}
                  </Button>
                );
              }}
            </CldUploadWidget>
            <CldUploadWidget
              options={{ sources: ["local"], multiple: true }}
              signatureEndpoint="/api/sign-image"
              onSuccess={(result, { widget }) => {
                handleAddPhoto(result.info.secure_url, "Wedding");
              }}
              onError={(error, { widget }) => {
                alert("Failed to upload : File Size is larger than 10MB !");
              }}
              onQueuesEnd={(result, { widget }) => {
                widget.close();
              }}
            >
              {({ open }) => {
                return (
                  <Button onClick={() => open()} variant="danger">
                    {isSubmitting
                      ? "Submitting.."
                      : isSubmitted
                      ? "Submitted."
                      : "Upload Wedding Images 🖼️"}
                  </Button>
                );
              }}
            </CldUploadWidget>
          </div>
        </>
      ) : (
        <>
          <h1>Enter Password</h1>
          <Form.Control
            type="text"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="outline-dark" onClick={verifyPassword}>
            Submit
          </Button>
        </>
      )}
    </div>
  );
};

export default Admin;
