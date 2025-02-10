interface PropsType {
    props: string;
    onClick: () => void;
}

export const SectionCarga = ({ props, onClick }: PropsType) => {
    return (
        <section className="flex flex-col my-5 rounded-sm justify-center items-center border-[#7B797A] bg-[#DCDADB] border-[3px] w-full h-96 border-dashed">
            <button onClick={onClick} className="py-0 rounded-xl bg-[#C9C9C9]">
                <div className="mx-6 my-3">
                    <div className="border-2 border-purple-800 rounded-xl">
                        <p className="px-2 pb-1 text-3xl text-purple-800">+</p>
                    </div>
                </div>
            </button>
            <span className="text-purple-700 text-[15px] select-none">
                {props}
            </span>
        </section>
    );
};
