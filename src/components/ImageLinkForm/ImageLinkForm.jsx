import './ImageLinkForm.css';
function ImageLinkForm({onChangeInput, input, onButtonClick}) {

    return(
        <div >
            <p className= 'fa3 tc'>What is the picture about? Hmm. Lets See! 🔎</p>
            <div className = 'center'>
                <div className="form center pa4 br3 shadow-5">
                <input className = 'f4 pa2 w-70 center' type = 'tex' value = {input} onChange={onChangeInput}/>
                <button className = 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonClick}>Detect</button>
                </div>
            </div>
        </div>

    )
}
export default ImageLinkForm;