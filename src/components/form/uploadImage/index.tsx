import { convertToBase64String } from '../../../lib/formatter';
import { useField } from 'formik';
import { CloseCircle, Edit2 } from 'iconsax-react';
// import Image from 'next/image';
import React, { useState } from 'react';


import { ImageUploadProps } from './types';

export function ImageUpload({
  id,
  rounded,
  square,
  accept,
  file_limit = 1,
  name,
  label,
  send_as_string = false,
}: ImageUploadProps) {
  const [field, meta, helpers] = useField(name);
  const [preview, setPreview] = useState('');

  const { setValue } = helpers;
  const max_allowed_size = file_limit * 1024 * 1024;

  const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      const currentFile = event.currentTarget.files[0];
      if (currentFile.size > max_allowed_size) {
        setValue('');
      }
      if (send_as_string) {
        convertToBase64String(currentFile, (result) => {
          setValue(result);
        });
      }

      convertToBase64String(currentFile, (result) => {
        setPreview(result as string);
      });

      setValue(currentFile);
    }
  };

  return (
   <div className='flex flex-col gap-4 border rounded justify-center'>
    <label className=' text-center font-medium text-lg'>{label}</label>
     <div className="">
      <label
        htmlFor={id || name}
        className={`w-28 h-28 flex bg-btn-gradient border border-sherlock-blue-400 mx-auto relative ${
          rounded ? 'rounded-full' : square ? 'rounded-md' : ''
        }`}>
        {!field.value ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none">
            <path
              opacity="0.5"
              d="M40.375 4.25H10.625C8.9358 4.25504 7.31722 4.92831 6.12277 6.12277C4.92831 7.31722 4.25504 8.9358 4.25 10.625V29.4525L12.495 21.2075C13.7099 20.0512 15.3228 19.4063 17 19.4063C18.6772 19.4063 20.2901 20.0512 21.505 21.2075L27.6059 27.3424L29.4929 25.4554C30.6906 24.2644 32.311 23.5959 34 23.5959C35.689 23.5959 37.3094 24.2644 38.5071 25.4554L46.75 33.7025V10.625C46.745 8.9358 46.0717 7.31722 44.8772 6.12277C43.6828 4.92831 42.0642 4.25504 40.375 4.25Z"
              fill="#000809"
            />
            <path
              d="M21.505 21.2074C20.2901 20.0511 18.6772 19.4062 17 19.4062C15.3228 19.4062 13.7099 20.0511 12.495 21.2074L4.25 29.4524V40.3749C4.25504 42.0641 4.92831 43.6827 6.12277 44.8772C7.31722 46.0716 8.9358 46.7449 10.625 46.7499H40.375C41.2322 46.7494 42.0805 46.576 42.8692 46.2401C43.6578 45.9042 44.3707 45.4127 44.965 44.7949L21.505 21.2074Z"
              fill="#000809"
            />
            <path
              opacity="0.25"
              d="M46.7504 33.6981L38.5076 25.4552C37.3099 24.2642 35.6895 23.5957 34.0004 23.5957C32.3114 23.5957 30.691 24.2642 29.4933 25.4552L27.6063 27.3422L44.9569 44.7863C46.1087 43.607 46.7526 42.0238 46.7504 40.3748V33.6981Z"
              fill="#000809"
            />
          </svg>
        ) : (
          <img
            width={64}
            height={64}
            src={preview}
            alt="img"
            className={`w-28 h-28 flex bg-bg3 ${
              rounded ? 'rounded-full' : square ? 'rounded-md' : ''
            }`}
          />
        )}
        <input
          type="file"
          className="appearance-none hidden"
          accept={accept.toString()}
          name={name}
          id={id}
          onChange={uploadFile}
          onBlur={uploadFile}
        />
        <span className="absolute top-6 right-6 rounded-full border p-1 border-sherlock-blue-400">
          <Edit2 size={12} variant="Bulk" />
        </span>

        <button
          className="absolute bottom-0 right-2"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setValue('');
            setPreview('');
          }}>
          <CloseCircle
            size={24}
            className="bg-btn-gradient rounded-full text-sherlock-blue-500"
          />
        </button>
      </label>
      <span className="opacity-80 text-sm block mx-auto w-full text-center pt-2">
        Allowed file types {accept.join(', ')}
      </span>

      {meta?.error && meta.touched && (
        <span className="block text-[#e03131] text-xs absolute -bottom-5 left-1/2 -translate-x-1/2">
          {meta?.error}
        </span>
      )}
    </div>
   </div>
  );
}

export * from './types';
