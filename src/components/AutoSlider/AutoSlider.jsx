"use client"
// Embla
import useEmblaCarousel from "embla-carousel-react"
import AutoScrollPlugin from "embla-carousel-auto-scroll"

export default function AutoScroll({ wrapperClass = " ", options, children }) {
    const plugin = [
        AutoScrollPlugin({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: false, stopOnFocusIn: false })
    ]

    const [emblaRef] = useEmblaCarousel(options, plugin, { direction: "ltr" });
    return (
        <>
            <div className={`overflow-hidden ${wrapperClass}`} ref={emblaRef}>
                <div className="flex -mr-5 items-start [backface-visibility:hidden]">
                    {children}
                </div>
            </div>
        </>
    )
}   