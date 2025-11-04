import React, { forwardRef } from "react";
// import styled, { css } from "styled-components";

const InputFieldComponent = forwardRef(
  (
    {
      id,
      name,
      label,
      type = "text",
      value,
      onChange,
      onBlur,
      placeholder,
      required = false,
      hint, // 보조설명(선택)
      error, // 에러문구(string)
      className = "",
      labelClassName = "",
      inputClassName = "",
      ...rest
    },
    ref
  ) => {
    const inputId = id || name;
    const hintId = hint ? `${inputId}-hint` : undefined;
    const errId = error ? `${inputId}-error` : undefined;

    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        {label && (
          <label
            htmlFor={inputId}
            className={`text-sm font-medium ${labelClassName}`}
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}

        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={
            [hintId, errId].filter(Boolean).join(" ") || undefined
          }
          className={`w-full rounded-md border px-3 py-2 outline-none 
            focus:ring-2 focus:ring-black/20 
            ${error ? "border-red-500" : "border-gray-300"} ${inputClassName}`}
          {...rest}
          autoComplete={rest.autoComplete}
          inputMode={rest.inputMode} // email, numeric 등
          autoCapitalize="none"
          spellCheck={false}
        />

        {hint && !error && (
          <p id={hintId} className="text-[12px] text-gray-500">
            {hint}
          </p>
        )}
        {error && (
          <p id={errId} className="text-[12px] text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default InputFieldComponent;
