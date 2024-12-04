const CTA = ({ text, href, color = "text-[#292D49]", bg, css, rounded = "rounded-full", width = "w-full sm:w-[150px] lg:w-[175px]", height = "h-[45px] lg:h-[55px]", }) => {
    return (
        <>
            <div className="w-full sm:w-auto" dangerouslySetInnerHTML={{
                __html: `<a href=${href} class="flex items-center ${width} justify-center ${height} ${color} ${bg} text-[16px] lg:text-[18px] font-medium ${rounded} ${css}  transition-all" >
                    ${text ?? "Start a Project"}
                </a>`
            }} />
        </>
    )
}

export default CTA;