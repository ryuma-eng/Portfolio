

import { Mail, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const recipientEmail = "rjdvd0615@gmail.com";

export const ContactSection = () => {
    const navigate = useNavigate()
    const contactRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const [toast, setToast] = useState("");
    const [isSending, SetIsSending] = useState(false);

    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    useEffect(() => {
        const node = contactRef.current;

        if (!node) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.22 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    async function handleSubmit (e){
        e.preventDefault();

        SetIsSending(true)
        try {

            // const res = await fetch('/api/contact-mail', {
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'application/json',
            //         'Accept': 'application/json'
            //     },
            //     body: JSON.stringify(formData)
            // })

            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/api/contact-mail`,
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await res.json();

            // console.log(data)
            if(data.errors){
                setErrors(data.errors)
            }else{
                navigate("/")
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                })

                setErrors({})
                setToast("Email Sent Successfully!")
                setTimeout(() => {
                    setToast("")
                }, 3000)

            }
        } catch (error) {
             setToast("Something went wrong. Please try again.");

            setTimeout(() => {
                setToast("");
            }, 3000);
        }finally{
            SetIsSending(false)
        }

    }


    return (
        <section
            ref={contactRef}
            id="contact"
            className="relative flex min-h-[88vh] items-center overflow-hidden pb-16 pt-16 lg:min-h-[92vh]"
        >
            {isSending && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-4 rounded-2xl bg-[#060a1d] px-8 py-6 shadow-xl">
                        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-cyan-400"></div>
                        <p className="text-sm font-semibold text-white">
                            Sending message...
                        </p>
                    </div>
                </div>
            )}

            {toast && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-[#060a1d]/95 px-10 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl animate-in zoom-in-95 duration-300">
                        
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-cyan-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M5 13l4 4L19 7" 
                                />
                            </svg>
                        </div>

                        <p className="text-lg font-bold text-white">
                            {toast}
                        </p>

                        <p className="text-sm text-white/50 text-center">
                            Your message has been sent. I’ll get back to you soon.
                        </p>
                    </div>
                </div>
            )}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.16),_transparent_30%)]" />
            <div className="absolute left-1/2 top-24 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="container">

                <div className={`text-center transition-all duration-700 ease-out mb-12 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                        Contact Me
                    </h2>
                    <p className="mt-3 text-sm text-white/65 sm:text-base">
                        Have a project in mind? Let's connect. I'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
                    <div
                        className={`text-left transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                    >


                        <h2 className="mt-6 max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl xl:text-6xl">
                            Let’s talk about your next website or project.
                        </h2>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                            Share what you need, what you already have, and what outcome you want.
                            I’ll read the message and reply by email.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="rounded-2xl border border-white/10 bg-[#0b1027]/85 p-5 shadow-[0_16px_42px_rgba(0,0,0,0.22)] backdrop-blur-md">
                                <div className="flex items-start gap-4">
                                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-100">
                                        <Mail className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">
                                            Email
                                        </p>
                                        <a
                                            href={`mailto:${recipientEmail}`}
                                            className="mt-2 block text-lg font-semibold text-white transition-colors hover:text-cyan-200"
                                        >
                                            {recipientEmail}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-3">
                                {[
                                    "Clear brief",
                                    "Fast response",
                                    "Professional build",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/75 backdrop-blur-md"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        className={`transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                        style={{ transitionDelay: isVisible ? "140ms" : "0ms" }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-[28px] border border-white/10 bg-[#060a1d]/90 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-8"
                        >
                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="block text-left">
                                    <span className="mb-2 block text-sm font-semibold text-white/75">Name</span>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Your name"
                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-cyan-300/40 focus:bg-white/7"
                                        value={formData.name}
                                        onChange={e => setFormData({...formData, name: e.target.value})}
                                    />
                                    {errors.name && <p className="error">{errors.name[0]}</p>}
                                </label>

                                <label className="block text-left">
                                    <span className="mb-2 block text-sm font-semibold text-white/75">Email</span>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="you@example.com"
                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-cyan-300/40 focus:bg-white/7"
                                        value={formData.email}
                                        onChange={e => setFormData({...formData, email: e.target.value})}
                                    />
                                    {errors.email && <p className="error">{errors.email[0]}</p>}
                                </label>
                            </div>

                            <label className="mt-5 block text-left">
                                <span className="mb-2 block text-sm font-semibold text-white/75">Subject</span>
                                <input
                                    name="subject"
                                    type="text"
                                    required
                                    placeholder="What do you want to discuss?"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-cyan-300/40 focus:bg-white/7"
                                    value={formData.subject}
                                    onChange={e => setFormData({...formData, subject: e.target.value})}
                                />
                                {errors.subject && <p className="error">{errors.subject[0]}</p>}
                            </label>

                            <label className="mt-5 block text-left">
                                <span className="mb-2 block text-sm font-semibold text-white/75">Message</span>
                                <textarea
                                    name="message"
                                    required
                                    rows={7}
                                    placeholder="Tell me about your project, timeline, and any details I should know."
                                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-cyan-300/40 focus:bg-white/7"
                                    value={formData.message}
                                    onChange={e => setFormData({...formData, message: e.target.value})}
                                />
                                {errors.message && <p className="error">{errors.message[0]}</p>}
                            </label>

                            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-xs leading-6 text-white/45 sm:max-w-sm">
                                    Clicking send opens your email app with a draft addressed to me.
                                </p>

                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm 
                                                font-semibold text-primary-foreground transition-all duration-300 ${
                                                    isSending ? "cursor-not-allowed opacity-50" : "hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(120,104,255,0.35)]" 
                                                } hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(120,104,255,0.35)]`}
                                >
                                    {isSending ? "Sending..." : "Send Message"}
                                    
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};