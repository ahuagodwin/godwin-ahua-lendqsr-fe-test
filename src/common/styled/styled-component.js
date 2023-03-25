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
        <section className={`${props.sx}`} onClick={props.onClick}>{props.children}</section>
    )
};


export const Select = (props) => {
    return (
        <select className={props.sx}
            name={props.name}
            id={props.id}
            onChange={props.onChange}
            defaultValue={props.defaultValue}
        >
            {props.children}
        </select>
    )
}

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
        <p className={props.sx} onClick={props.onClick}>{props.children}</p>
    )
}


export const Span = (props) => {
    return (
        <span className={props.sx} onClick={props.onClick}>{props.children}</span>
    )
}


export const Input = (props) => {
    return (
      <input
        type={props.type?? undefined}
        onClick={props.onClick?? undefined}
        onChange={props.onChange}
        name={props.name ?? undefined}
        id={props.id ?? undefined}
        onBlur={props.onBlur}
        value={props.value}
        placeholder={props.name ?? undefined}
        className={`auth__layout__input ${props.sx}`}
      />
    );
}


export const Button = (props) => {
    return (
      <button
        key={props.key}
        type={props.type ?? undefined}
        onClick={props.onClick ?? undefined}
        id={props.id ?? undefined}
        className={`p-3 ${props.sx} ${props.bg || "auth__layout__btn"} ${props.color || "text-white"}`}
      >  
       {props.isLoading ? <div className="loading__spinner"> <Icons.Spinner /></div> :  <Span>{props.name || "Lendqsr"}</Span> }
      </button>
    );
}


export const Form = (props) => {
    return (
        <form onSubmit={props.onSubmit} className={props.sx}>{props.children}</form>
    )
}


export const Table = (props) => {
    return (
        <table className={props.sx} onClick={props.onClick} id={props.id} onChange={props.onChange} key={props.key}>{props.children}</table>
    )
}

export const TR = (props) => {
    return (
        <tr className={props.sx} onClick={props.onClick} id={props.id} onChange={props.onChange}>{props.children}</tr>
    )
}

export const TD = (props) => {
    return (
        <td className={props.sx} onClick={props.onClick} id={props.id} onChange={props.onChange} key={props.key}>{props.children}</td>
    )
}

export const TBody = (props) => {
    return (
        <tbody className={props.sx} onClick={props.onClick} id={props.id} onChange={props.onChange} key={props.key} >{props.children}</tbody>
    )
}

export const THead = (props) => {
    return (
        <thead className={props.sx} onClick={props.onClick} id={props.id} onChange={props.onChange} key={props.key}>{props.children}</thead>
    )
}

export const TH = (props) => {
    return (
        <th className={props.sx} onClick={props.onClick} id={props.id} onChange={props.onChange} scope={props.scope}>{props.children}</th>
    )
}