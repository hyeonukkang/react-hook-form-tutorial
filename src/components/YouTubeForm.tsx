import * as S from './YouTubeForm.styled'

const YouTubeForm = () => {
  return (
    <div>
      <form>
        <S.StyledLabel htmlFor="username">Name</S.StyledLabel>
        <S.StyledInput type="text" id="username" name="username" />

        <S.StyledLabel htmlFor="email">E-mail</S.StyledLabel>
        <S.StyledInput type="email" id="email" name="email" />

        <S.StyledLabel htmlFor="channel">Channel</S.StyledLabel>
        <S.StyledInput type="email" id="channel" name="channel" />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default YouTubeForm