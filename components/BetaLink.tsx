"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function BetaLink({ url }: { url: string }) {
    const { t } = useLanguage();
    if (!url) return null;

    return (
        <div className="flex flex-col items-center xl:items-start gap-2 pt-2">
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full text-white border border-blue-400/40 bg-blue-500/15 hover:bg-blue-500/25 transition-colors"
            >
                {t("projects.beta.cta")}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
            </a>
            <span className="text-xs text-gray-500">{t("projects.beta.note")}</span>
        </div>
    );
}
