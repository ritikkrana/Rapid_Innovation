import React from 'react';
import styles from '../styles/ContactUs.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux'

export default function ContactUs() {
  const theme = useSelector((state) => state.theme.theme)

  return (
    <div className={styles.contactUs}>
      <div id={styles.contactUs1}>
        <h1>Contact Us</h1>
        <p>Premier AI, Blockchain, and Web3 Development Services. Transform your business with our top-tier experts, delivering AI and blockchain solutions in just 90 days.</p>
      </div>

      <div id={styles.contactUs2}>
        <div id={styles.contactUs2_2} style={{ background: theme === 'light' ? 'white' : 'black', color: theme==='light' ? 'black':'white'}}>
          <Formik
            initialValues={{
              name: '',
              email: '',
              address: '',
              dob: '',
              bio: '',
              profileImage: '',
              bannerImage: ''
            }}
            validationSchema={Yup.object({
              name: Yup.string().required('Required'),
              email: Yup.string().email('Invalid email address').required('Required'),
              address: Yup.string().required('Required'),
              dob: Yup.date().required('Required').max(new Date(), 'Invalid date of birth'),
              bio: Yup.string().required('Required'),
              profileImage: Yup.mixed().required('Required'),
              bannerImage: Yup.mixed().required('Required')
            })}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              setTimeout(() => {
                const alertMessage = `Thank you for submitting!\n\nName: ${values.name}\nEmail: ${values.email}\nAddress: ${values.address}\nDate of Birth: ${values.dob}\nYour Bio: ${values.bio}\nProfile image name: ${values.profileImage}\nBanner image name: ${values.bannerImage}`;
                alert(alertMessage);
                resetForm();
                setSubmitting(false);
              }, 400);
            }}
          >
            <>
              <div id={styles.formDiv}>
                <Form>
                  <div id={styles.insideDiv}>
                    <div>
                      <label htmlFor="name">Name</label>
                      <Field type="text" name="name" placeholder="Enter Your Name" />
                      <ErrorMessage name="name" />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <Field type="email" name="email" placeholder="Enter Your Email" />
                      <ErrorMessage name="email" />
                    </div>
                    <div>
                      <label htmlFor="address">Address</label>
                      <Field type="text" name="address" placeholder="Enter Your Address" />
                      <ErrorMessage name="address" />
                    </div>
                    <div>
                      <label htmlFor="dob">Date of Birth</label>
                      <Field type="date" name="dob" />
                      <ErrorMessage name="dob" />
                    </div>
                    <div>
                      <label htmlFor="bio">Bio</label>
                      <Field as="textarea" name="bio" placeholder="Enter Your Bio" />
                      <ErrorMessage name="bio" />
                    </div>
                    <div>
                      <label htmlFor="profileImage">Profile Image</label>
                      <Field type="file" name="profileImage" accept="image/*" />
                      <ErrorMessage name="profileImage" />
                    </div>
                    <div>
                      <label htmlFor="bannerImage">Banner Image</label>
                      <Field type="file" name="bannerImage" accept="image/*" />
                      <ErrorMessage name="bannerImage" />
                    </div>
                  </div>
                  <div id={styles.submitDiv}>
                    <button type="submit">Submit</button>
                  </div>
                </Form>
              </div>
            </>
          </Formik>
        </div>
      </div>
    </div>
  );
}

