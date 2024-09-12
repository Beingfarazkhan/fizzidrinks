import { LinkField } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import clsx from 'clsx'
import React from 'react'

type Props = {
    buttonLink: LinkField,
    buttonText: string | null,
    className?: string,
}

const Button = ({ buttonLink, buttonText, className }: Props) => {
    return (
        <PrismicNextLink field={buttonLink} className={clsx("rounded-xl bg-orange-600 px-5 py-4 text-center font-bold text-xl text-white uppercase tracking-wide duration-150 transition-colors hover:bg-orange-700 md:text-2xl", className)}>
            {buttonText}
        </PrismicNextLink>
    )
}

export default Button