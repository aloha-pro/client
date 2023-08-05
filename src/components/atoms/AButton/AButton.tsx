interface ButtonProps {
  primary?: boolean
  size?: 'small' | 'big'
  border?: 'square' | 'round'
  label: string
}

export const AButton = ({
  primary = false,
  size = 'small',
  border = 'square',
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        primary
          ? 'text-white bg-blue-wapple'
          : 'text-blue-wapple bg-white border border-solid border-blue-wapple',
        size === 'small'
          ? 'text-sm px-40 py-3'
          : 'text-2xl font-bold px-28 py-6',
        border === 'square' ? 'rounded' : 'rounded-[6.25rem]',
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  )
}
