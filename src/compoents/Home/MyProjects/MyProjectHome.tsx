/* eslint-disable @next/next/no-img-element */
import * as S from './styles'

export const MyProjectHome = () => {
  return (
    <S.Wraper>
      <span>My Projects</span>

      <S.Container>
        <input type="radio" name="slider" id="item-1" />
        <input type="radio" name="slider" id="item-2" defaultChecked />
        <input type="radio" name="slider" id="item-3" />
        <div className="cards">
          <S.Card htmlFor="item-1" id="song-1">
            <S.CardImage
              src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
              alt="song"
            />
          </S.Card>
          <S.Card htmlFor="item-2" id="song-2">
            <S.CardImage
              src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
              alt="song"
            />
          </S.Card>
          <S.Card htmlFor="item-3" id="song-3">
            <S.CardImage
              src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="song"
            />
          </S.Card>
        </div>
        {/* <div className="player">
          <div className="upper-part">
            <div className="play-icon">
              <svg
                width="20"
                height="20"
                fill="#2992dc"
                stroke="#2992dc"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-play"
                viewBox="0 0 24 24"
              >
                <defs />
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
            <div className="info-area" id="test">
              <label className="song-info" id="song-info-1">
                <div className="title">Bunker</div>
                <div className="sub-line">
                  <div className="subtitle">Balthazar</div>
                  <div className="time">4.05</div>
                </div>
              </label>
              <label className="song-info" id="song-info-2">
                <div className="title">Words Remain</div>
                <div className="sub-line">
                  <div className="subtitle">Moderator</div>
                  <div className="time">4.05</div>
                </div>
              </label>
              <label className="song-info" id="song-info-3">
                <div className="title">Falling Out</div>
                <div className="sub-line">
                  <div className="subtitle">Otzeki</div>
                  <div className="time">4.05</div>
                </div>
              </label>
            </div>
          </div>
          <div className="progress-bar">
            <span className="progress" />
          </div>
        </div>*/}
      </S.Container>

      {/* <div className="container">
        <input type="radio" name="slider2" id="item-11" defaultChecked />
        <input type="radio" name="slider2" id="item-22" />
        <input type="radio" name="slider2" id="item-33" />
        <div className="cards">
          <label className="card" htmlFor="item-11" id="song-11">
            <img
              src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
              alt="song"
            />
          </label>
          <label className="card" htmlFor="item-22" id="song-22">
            <img
              src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
              alt="song"
            />
          </label>
          <label className="card" htmlFor="item-33" id="song-33">
            <img
              src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="song"
            />
          </label>
        </div>
      </div> */}
    </S.Wraper>
  )
}
