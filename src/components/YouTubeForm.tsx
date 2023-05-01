import { useForm } from "react-hook-form"
import * as S from "./YouTubeForm.styled"
import { DevTool } from "@hookform/devtools"
import { FormValues } from "./type"

let renderCount = 0

const YouTubeForm = () => {
  const form = useForm<FormValues>()
  const { register, control, handleSubmit } = form
  //  bad case
  // const { name, ref, onChange, onBlur } = register("username")
  //   <S.StyledInput
  //   type="text"
  //   id="username"
  //   name={name}
  //   ref={ref}
  //   onChange={onChange}
  //   onBlur={onBlur}
  // />

  // you can check react-hook-form render only one when you typing on input.
  renderCount++

  const onSubmit = (data: FormValues) => {
    console.log("🚀 ~ file: YouTubeForm.tsx:25 ~ onSubmit ~ data:", data)
  }

  return (
    <div>
      <h1>YouTube form ({renderCount / 2})</h1>
      {/* if you got error handleSubmit(onSubmit) of onSumbit
      '(data: FormValues) => void' 형식의 인수는 'SubmitHandler<FieldValues>' 형식의 매개 변수에 할당될 수 없습니다.
      'data' 및 'data' 매개 변수의 형식이 호환되지 않습니다.
      'FieldValues' 형식에 'FormValues' 형식의 username, email, channel 속성이 없습니다.ts(2345)
      you should check useForm type
      */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <S.StyledLabel htmlFor="username">Name</S.StyledLabel>
        <S.StyledInput
          type="text"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        />

        <S.StyledLabel htmlFor="email">E-mail</S.StyledLabel>
        <S.StyledInput
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email format",
            },
            validate: {
              notAdmin: (fieldValue) => {
                return (
                  fieldValue !== "admin@example.com" ||
                  "Enter a different email"
                )
              },
              notBlackListed: (fieldValue) => {
                return (
                  !fieldValue.endsWith("bad.com") ||
                  "This domain is not allowed"
                )
              },
            },
          })}
        />

        <S.StyledLabel htmlFor="channel">Channel</S.StyledLabel>
        <S.StyledInput type="text" id="channel" {...register("channel")} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default YouTubeForm
