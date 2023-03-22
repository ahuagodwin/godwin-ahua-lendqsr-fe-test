import { Icons } from "../../constant/Icons";

export const Wrapper = (props) => {
    return (
        <div className={`${props.sx}`}>{props.children}</div>
    )
};


export const PublicLayout = (props) => {
    return (
        <div className={`auth__layout ${props.sx}`}>
            {props.children}
        </div>
    )
};


export const Section = (props) => {
    return (
        <section className={`${props.sx}`}>{props.children}</section>
    )
};


export const Card = (props) => {
    return (
        <div className={`${props.sx}`}>{props.children}</div>
    )
};

export const Img = (props) => {
    return (
        <img src={props.img} alt={props.alt} className={props.sx}/>
    )
}


export const Text = (props) => {
    return (
        <p className={props.sx}>{props.children}</p>
    )
}


export const Span = (props) => {
    return (
        <span className={props.sx}>{props.children}</span>
    )
}


export const Input = (props) => {
    return (
      <input
        type={props.type ?? undefined}
        onClick={props.onClick ?? undefined}
        onChange={props.onChange ?? undefined}
        name={props.name ?? undefined}
        id={props.id ?? undefined}
        placeholder={props.name ?? undefined}
        className={`auth__layout__input ${props.sx}`}
      />
    );
}


export const Button = (props) => {
    return (
      <button
        type={props.type ?? undefined}
        onClick={props.onClick ?? undefined}
        id={props.id ?? undefined}
        className={`p-3 ${props.sx} ${props.bg || "auth__layout__btn"} ${props.color || "text-white"}`}
      >  
        {props.isLoading ? ( <Icons.Spinner className="animate-spin" />) : <Span>{props.name || "Lendqsr"}</Span> }
      </button>
    );
}


export const Form = (props) => {
    return (
        <form onSubmit={props.onSubmit} className={props.sx}>{props.children}</form>
    )
}
