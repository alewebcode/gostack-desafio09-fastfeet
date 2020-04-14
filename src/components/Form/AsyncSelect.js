import debounce from 'debounce-promise';
import React, { useEffect, useRef, useCallback } from 'react';
import { useField } from '@unform/core';
import Select from 'react-select/async';

export default function AsyncSelect({ name, label, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue = '', registerField } = useField(name);

  const customStyles = {
    control: () => ({
      // none of react-select's styles are passed to <Control />
      minWidth: 250,
      border: '1px solid #cccccc94',
      borderRadius: '4px',
      fontSize: '14px',
      justifyItems: 'left',
      marginRight: '20px',
      color: '#ccc',
    }),
    indicatorSeparator: () => ({
      width: '0',
    }),
  };

  const selectItem = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: '1',
  };

  const labelStyle = {
    fontSize: '12px',
    fontWeight: '700',
    marginBottom: '4px',
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'select.state.value',
      getValue: (ref) => {
        if (!ref.select.state.value) {
          return [];
        }
        return ref.select.state.value.value;
      },
    });
  }, [fieldName, registerField]);

  // const debouncedLoadOptions = useCallback(
  //   debounce((inputValue) => loadOptions(inputValue), 500, {
  //     leading: true,
  //   }),
  //   [loadOptions]
  // );

  return (
    <div style={selectItem}>
      {label && (
        <label style={labelStyle} htmlFor={fieldName}>
          {label}
        </label>
      )}
      <Select
        cacheOptions
        defaultvalue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        styles={customStyles}
        {...rest}
      />
    </div>
  );
}
