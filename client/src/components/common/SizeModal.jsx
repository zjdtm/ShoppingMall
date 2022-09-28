import styled from 'styled-components';
import Button from './Button';

const Fullscreen = styled.div`
   position: fixed;
   z-index: 30;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.25);
   display: flex;
   justify-content: center;
   align-items: center;
`;

const AskModalBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  border-radius:4px;
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
  .bottons {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledButton = styled(Button)`
   height: 2rem;
   & + & {
    margin-left: 0.75rem;
   }
`;


const Image = styled.img`
    width: 500px;
`;


const AskModal = ({
    visible,
    description,
    cancelText = '닫기',
    onCancel,
}) => {
    if(!visible) return null;
    return (
        <Fullscreen>
            <AskModalBlock>
                <Image src={description} alt="이미지"/>
                <div className='buttons'>
                    <StyledButton onClick={onCancel}>{cancelText}</StyledButton>
                </div>
            </AskModalBlock>
        </Fullscreen>
    )
}

export default AskModal;