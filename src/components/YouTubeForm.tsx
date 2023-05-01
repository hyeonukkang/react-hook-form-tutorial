import { useForm } from "react-hook-form"
import * as S from "./YouTubeForm.styled"

const YouTubeForm = () => {
  const form = useForm()
  const { register } = form
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

  return (
    <div>
      <form>
        <S.StyledLabel htmlFor="username">Name</S.StyledLabel>
        <S.StyledInput type="text" id="username" {...register("username")} />

        <S.StyledLabel htmlFor="email">E-mail</S.StyledLabel>
        <S.StyledInput type="email" id="email" {...register("email")} />

        <S.StyledLabel htmlFor="channel">Channel</S.StyledLabel>
        <S.StyledInput type="email" id="channel" {...register("channel")} />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default YouTubeForm
