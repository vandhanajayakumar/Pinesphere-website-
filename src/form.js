import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const InternshipApplicationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [attachments, setAttachments] = useState([]);

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    console.log('Attachments:', attachments);
    // Handle form submission here (e.g., send data to server)
  };

  const handleAttachmentChange = (e) => {
    setAttachments([...attachments, ...e.target.files]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Full Name Field */}
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          {...register('fullName', { required: 'Full Name is required' })}
        />
        {errors.fullName && <span>{errors.fullName.message}</span>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      {/* Phone Number Field */}
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Invalid phone number, must be 10 digits',
            },
          })}
        />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>

      {/* Education Field */}
      <div>
        <label htmlFor="education">Education:</label>
        <input
          type="text"
          id="education"
          {...register('education', { required: 'Education is required' })}
          placeholder="e.g., B.Sc in Computer Science"
        />
        {errors.education && <span>{errors.education.message}</span>}
      </div>

      {/* Relevant Skills Field */}
      <div>
        <label htmlFor="skills">Relevant Skills:</label>
        <textarea
          id="skills"
          {...register('skills', { required: 'Please list your relevant skills' })}
          placeholder="e.g., JavaScript, React, Python"
        />
        {errors.skills && <span>{errors.skills.message}</span>}
      </div>

      {/* Resume Upload Field */}
      <div>
        <label htmlFor="resume">Resume:</label>
        <input
          type="file"
          id="resume"
          onChange={handleAttachmentChange}
          {...register('resume', { required: 'Resume is required' })}
        />
        {errors.resume && <span>{errors.resume.message}</span>}
        {attachments.length > 0 && (
          <ul>
            {attachments.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Cover Letter Field */}
      <div>
        <label htmlFor="coverLetter">Cover Letter:</label>
        <textarea
          id="coverLetter"
          {...register('coverLetter', { required: 'Cover letter is required' })}
          placeholder="Write a brief cover letter explaining your interest in this internship"
        />
        {errors.coverLetter && <span>{errors.coverLetter.message}</span>}
      </div>

      {/* Submit Button */}
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default InternshipApplicationForm;
