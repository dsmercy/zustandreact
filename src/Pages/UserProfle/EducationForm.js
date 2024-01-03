import React, { useState } from 'react'
import CloseButton from 'react-bootstrap/CloseButton'

export default function EducationForm(props) {
    const {eduData}= props;
  return (
    <>
      <div className="mt-2 pt-2">
        {" "}
        {eduData.degreeName}|{eduData.fieldOfStudyName}|{eduData.collegeName}|
        {eduData.yearofCompletion}
        <button>Edit</button>
        <CloseButton />
      </div>
    </>
  );
}
