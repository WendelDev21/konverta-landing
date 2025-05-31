"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, Linkedin } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Moon,
  Sun,
  Menu,
  X,
  Mail,
  Phone,
} from "lucide-react"

function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src="/favicon.png" alt="Konveta" width={32} height={32} />
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Konveta
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#inicio" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
            Início
          </Link>
          <Link href="/#sobre" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
            Sobre
          </Link>
          <Link
            href="/#integracoes"
            className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
          >
            Integrações
          </Link>
          <Link href="/#precos" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
            Preços
          </Link>
          <Link
            href="/#depoimentos"
            className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
          >
            Depoimentos
          </Link>
          <Link href="/#contato" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
            Contato
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button className="hidden md:inline-flex bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
            Teste Grátis
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/#inicio" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              Início
            </Link>
            <Link href="/#sobre" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              Sobre
            </Link>
            <Link
              href="/#integracoes"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              Integrações
            </Link>
            <Link href="/#precos" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              Preços
            </Link>
            <Link
              href="/#depoimentos"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              Depoimentos
            </Link>
            <Link href="/#contato" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              Contato
            </Link>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              Teste Grátis
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">📚 Central de Ajuda</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Como podemos{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              ajudar você?
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Encontre respostas rápidas para suas dúvidas, tutoriais detalhados e entre em contato com nosso suporte
            quando precisar.
          </p>

          <div className="max-w-2xl mx-auto">
            
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      question: "Como faço para começar a usar a Konveta?",
      answer:
        "É muito simples! Primeiro, entre em contato com a nossa equipe. Depois, escolha o plano de sua preferência e realize o pagamento. Pronto! Você já pode começar a gerenciar seus primeiros leads e configurar suas primeiras automações.",
    },
    {
      question: "Posso importar meus leads de outras ferramentas?",
      answer:
        "Sim! Você pode importar seus leads através das rotas de API da Konverta, ou através de webhooks configuráveis.",
    },
    {
      question: "Como funciona o período de teste gratuito?",
      answer:
        "Oferecemos 10 dias de teste gratuito com acesso completo a todas as funcionalidades. Não é necessário cartão de crédito para começar. Após o período de teste, você pode escolher o plano que melhor se adequa ao seu negócio.",
    },
    {
      question: "Posso cancelar minha assinatura a qualquer momento?",
      answer:
        "Claro! Você pode cancelar sua assinatura a qualquer momento entrando em contato com a nossa equipe. Não há taxas de cancelamento ou multas. Seus dados ficam seguros por 30 dias após o cancelamento.",
    },
    {
      question: "A Konveta oferece suporte técnico?",
      answer:
        "Sim! Oferecemos suporte via chat, email e telefone. Nosso time está disponível de segunda a sexta, das 9h às 18h. Clientes dos planos Pro e Business têm suporte prioritário.",
    },
    {
      question: "Meus dados estão seguros na Konveta?",
      answer:
        "Absolutamente! Utilizamos criptografia de nível bancário, backups automáticos diários e seguimos as melhores práticas de segurança. Somos compatíveis com a LGPD e levamos a privacidade dos seus dados muito a sério.",
    },
    {
      question: "Posso usar a Konveta no celular?",
      answer:
        "Sim! Nossa plataforma é totalmente responsiva e funciona perfeitamente em smartphones e tablets. Em breve também lançaremos nossos aplicativos nativos para iOS e Android.",
    },
    {
      question: "Como funciona a integração com WhatsApp?",
      answer:
        "Nossa integração com WhatsApp permite que você receba leads automaticamente na Konveta quando alguém entra em contato pelo WhatsApp Business.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">FAQ</Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Perguntas frequentes</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre a Konveta
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white dark:bg-gray-900 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const contactOptions = [
    {
      icon: <Mail className="h-8 w-8 text-orange-500" />,
      title: "Email",
      description: "Envie sua dúvida por email",
      action: "Enviar Email",
      available: "Resposta em até 1h",
      link: "mailto:konvertacrm@gmail.com",
    },
    {
      icon: <Phone className="h-8 w-8 text-orange-500" />,
      title: "Telefone",
      description: "Ligue para nosso suporte",
      action: "Entre em contato",
      available: "Seg-Sex, 8h-18h",
      link: "https://wa.me/555579991190534?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20suporte.",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">Suporte</Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Ainda precisa de ajuda?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nossa equipe de suporte está sempre pronta para ajudar você. Escolha a forma de contato que preferir.
          </p>
        </div>

        <div className="text-center grid md:grid-cols-2 gap-6 mb-16">
          {contactOptions.map((option, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-full w-fit">
                  {option.icon}
                </div>
                <CardTitle className="text-lg">{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-green-600 dark:text-green-400 font-medium">{option.available}</div>
                <a href={option.link} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  {option.action}
                </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>       
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/favicon.png" alt="Konveta" width={32} height={32} />
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Konveta
              </span>
            </div>
            <p className="text-gray-400">O CRM mais simples e eficiente para micro e pequenos empreendedores.</p>
            <div className="flex space-x-4">
                <Link href="https://instagram.com/konvertacrm" target="_blank" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://www.linkedin.com/company/konvertacrm" target="_blank" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/#integracoes" className="hover:text-orange-500 transition-colors">
                  Integrações
                </Link>
              </li>
              <li>
                <Link href="/#precos" className="hover:text-orange-500 transition-colors">
                  Preços
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/#sobre" className="hover:text-orange-500 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="hover:text-orange-500 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                  Central de Ajuda
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Konveta. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
              Privacidade
            </Link>
            <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
              Termos
            </Link>
            <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function HelpCenterPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
