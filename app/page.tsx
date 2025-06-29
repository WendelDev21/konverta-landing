"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeProvider } from "@/components/theme-provider"
import { Facebook, Instagram, Linkedin, PlusCircle } from "lucide-react"
import {
  Moon,
  Sun,
  Menu,
  X,
  Users,
  Zap,
  Shield,
  Star,
  Check,
  ArrowRight,
  BarChart3,
  Target,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

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
          <Image src="/favicon.png" alt="Konverta" width={32} height={32} />
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            konverta
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#inicio" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
            Início
          </Link>
          <Link href="#sobre" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
            Sobre
          </Link>
          <Link
            href="#integracoes"
            className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
          >
            Integrações
          </Link>
          <Link href="#precos" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
            Preços
          </Link>
          <Link
            href="#depoimentos"
            className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
          >
            Depoimentos
          </Link>
          <Link href="#contato" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
            Contato
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <a href="http://wa.me/5579991190534?text=Olá!%20Me%20chamo%20[SEU NOME],%20e%20gostaria%20de%20realizar%20um%20teste%20grátis.   " target="_blank">
          <Button className="hidden md:inline-flex bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
            Teste Grátis
          </Button>
          </a>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#inicio" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              Início
            </Link>
            <Link href="#sobre" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              Sobre
            </Link>
            <Link
              href="#integracoes"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              Integrações
            </Link>
            <Link href="#precos" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              Preços
            </Link>
            <Link
              href="#depoimentos"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              Depoimentos
            </Link>
            <Link href="#contato" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              Contato
            </Link>
            <a href="http://wa.me/5579991190534?text=Olá!%20Me%20chamo%20[SEU NOME],%20e%20gostaria%20de%20realizar%20um%20teste%20grátis.   " target="_blank">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              Teste Grátis
            </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function HeroSection() {
  return (
    <section
      id="inicio"
      className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                🚀 Mini CRM para Pequenos Negócios
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Transforme seus{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  leads em vendas
                </span>{" "}
                com a konverta
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                O CRM mais simples e eficiente para micro e pequenos empreendedores. Gerencie seus leads, acompanhe
                oportunidades e aumente suas vendas sem complicação.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="http://wa.me/5579991190534?text=Olá!%20Me%20chamo%20[SEU NOME],%20e%20gostaria%20de%20realizar%20um%20teste%20grátis.   " target="_blank">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-6"
              >
                Testar Grátis Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </a>              
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Empresas Ativas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">24h</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Suporte</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Dashboard de Leads</h3>
                  <Badge className="bg-green-100 text-green-800">+15% este mês</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">127</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Leads Ativos</div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">89%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Taxa Conversão</div>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-r from-orange-200 to-red-200 dark:from-orange-800 to-red-800 rounded-lg flex items-end justify-center">
                  <BarChart3 className="h-16 w-16 text-orange-600 mb-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: "Foco em Resultados",
      description: "Desenvolvido especificamente para pequenos negócios que precisam converter mais leads em vendas.",
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: "Simplicidade Extrema",
      description: "Interface intuitiva que qualquer pessoa pode usar, sem necessidade de treinamento complexo.",
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Dados Seguros",
      description: "Seus dados e de seus clientes protegidos com criptografia de nível bancário.",
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">Sobre a konverta</Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">O CRM que entende seu negócio</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Criamos a konverta pensando nos desafios únicos dos micro e pequenos empreendedores. Uma ferramenta poderosa,
            mas simples o suficiente para usar no dia a dia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Por que escolher a konverta?</h3>
            <div className="space-y-4">
              {[
                "Configuração em menos de 5 minutos",
                "Foco total em micro e pequenos empreendedores",
                "Preço acessível para pequenos negócios",
                "Interface intuitiva e fácil de usar",
                "Acompanhamento de leads em tempo real",
                "Suporte 24/7",
                "Integrações com outras ferramentas populares",
                "Dashboards inteligentes para acompanhar resultados",
                "Sem taxas ocultas ou complicações",
                "Cancele a qualquer momento, sem burocracia",               
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8">
              <div className="text-center space-y-4">
                <Users className="h-16 w-16 text-orange-500 mx-auto" />
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Mais de 100 empresas confiam na konverta
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Desde freelancers até pequenas empresas com 50+ funcionários
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntegrationsSection() {
  const integrations = [
    { icon: <MessageSquare className="h-8 w-8 text-orange-500"/>, name: "WhatsApp", description: "Conecte seus leads do WhatsApp automaticamente" },
    { icon: <Mail className="h-8 w-8 text-orange-500" />, name: "Email Marketing", description: "Sincronize com suas campanhas de email" },
    { icon: <Facebook className="h-8 w-8 text-orange-500" />, name: "Facebook Ads", description: "Importe leads do Facebook diretamente" },
    { icon: <Instagram className="h-8 w-8 text-orange-500" />, name: "Instagram", description: "Gerencie leads do Instagram Business" },
    { icon: <MessageSquare className="h-8 w-8 text-orange-500" />, name: "Zapier", description: "Conecte com mais de 3000 aplicativos" },
    { icon: <PlusCircle className="h-8 w-8 text-orange-500" />, name: "Entre outros", description: "Integrações personalizadas disponíveis" },
  ]

  return (
    <section id="integracoes" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">Integrações</Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Conecte todas suas fontes de leads</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Centralize todos os seus leads em um só lugar. A konverta se integra com as principais plataformas que você
            já usa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {integrations.map((integration, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-full w-fit">
                  {integration.icon}
                </div>
                <CardTitle className="text-xl">{integration.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{integration.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "R$ 49,90",
      period: "/mês",
      description: "Ideal para pequenos negócios",
      features: [
        "Até 100 leads", 
        "Até 1 webhook", 
        "Kanban board",
        "Painel Financeiro",
        "Relatórios Personalizados", 
        "API de integração"],
      popular: false,
    },
    {
      name: "Pro",
      price: "R$ 99,90",
      period: "/mês",
      description: "Ideal para empresas em crescimento",
      features: [
        "Contatos ilimitados",
        "Até 5 webhooks",
        "Kanban board",
        "Painel Financeiro",
        "Relatórios Personalizados",
        "Suporte prioritário",
        "API de integração",
      ],
      popular: true,
    },
    {
      name: "Business",
      price: "R$ 249",
      period: "/mês",
      description: "Para empresas estabelecidas",
      features: [
        "Contatos ilimitados",
        "Webhooks ilimitados",
        "Kanban board",
        "Painel Financeiro",
        "Relatórios Personalizados",
        "Suporte 24/7",
        "API de integração",
        "Integrações gratuitas",
      ],
      popular: false,
    },
  ]

  return (
    <section id="precos" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">Preços Transparentes</Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Escolha o plano ideal para seu negócio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sem taxas ocultas, sem surpresas. Cancele quando quiser.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up ${plan.popular ? "border-2 border-orange-500 scale-105" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  Mais Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-600 dark:text-gray-400">{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="http://wa.me/5579991190534?text=Olá!%20Me%20chamo%20[SEU NOME],%20e%20gostaria%20de%20realizar%20um%20teste%20grátis.   " target="_blank">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                      : "bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800"
                  }`}
                  size="lg"
                >
                  Começar Teste Grátis
                </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            🔒 Pagamento 100% seguro
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Todos os preços em reais (BRL). Sem taxas de setup ou cancelamento.
          </p>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Consultora de Marketing",
      company: "MS Consultoria",
      content:
        "A konverta transformou minha forma de trabalhar. Antes eu perdia leads por falta de organização, agora tenho tudo centralizado e minha taxa de conversão aumentou 40%!",
      rating: 5,
    },
    {
      name: "João Santos",
      role: "Fundador",
      company: "Santos Imóveis",
      content:
        "Finalmente um CRM que não precisa de manual! Em 10 minutos já estava usando e organizando meus clientes. O suporte é excepcional, sempre prontos para ajudar.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      role: "Freelancer",
      company: "Design & Criação",
      content:
        "Como freelancer, preciso de algo simples mas eficiente. A konverta é perfeita! Consigo acompanhar todos meus projetos e clientes sem complicação.",
      rating: 5,
    },
  ]

  return (
    <section id="depoimentos" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">Depoimentos</Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mais de 100 empresas já transformaram seus resultados com a konverta. Veja alguns depoimentos reais de quem
            usa nossa plataforma.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base italic">"{testimonial.content}"</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-900 rounded-full px-6 py-3 shadow-lg">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center text-white text-xs font-bold"
                >
                  {i}
                </div>
              ))}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">+100 empresas satisfeitas</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">Fale Conosco</Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Pronto para começar?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como a konverta pode transformar seu gerenciamento de leads e aumentar
            suas vendas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Entre em contato</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                    <div className="text-gray-600 dark:text-gray-400">konvertacrm@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Telefone</div>
                    <div className="text-gray-600 dark:text-gray-400">+55(79) 9 9119-0534</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Endereço</div>
                    <div className="text-gray-600 dark:text-gray-400">Nossa Senhora do Socorro, SE - Brasil</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">🚀 Teste grátis por 10 dias</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Sem cartão de crédito. Sem compromisso. Cancele quando quiser.
              </p>
              <a href="http://wa.me/5579991190534?text=Olá!%20Me%20chamo%20[SEU NOME],%20e%20gostaria%20de%20realizar%20um%20teste%20grátis.   " target="_blank">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                Começar Agora
              </Button>
              </a>
            </div>
          </div>

          <Card className="animate-fade-in-right">
            <CardHeader>
              <CardTitle>Envie uma mensagem</CardTitle>
              <CardDescription>Preencha o formulário e entraremos em contato em até 24 horas.</CardDescription>
            </CardHeader>
            <form
              action="https://formsubmit.co/konvertacrm@gmail.com"
              method="POST"
            >
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Nome</label>
                    <Input name="nome" placeholder="Seu nome" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <Input name="email" type="email" placeholder="seu@email.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Empresa</label>
                  <Input name="empresa" placeholder="Nome da sua empresa" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Mensagem</label>
                  <Textarea name="mensagem" placeholder="Como podemos ajudar você?" className="min-h-[120px]" required />
                </div>

                {/* Proteções extras */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://site.konvertaleads.com.br" />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  Enviar Mensagem
                </Button>
              </CardContent>
            </form>

          </Card>
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
              <Image src="/favicon.png" alt="konverta" width={32} height={32} />
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                konverta
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
                <Link href="#integracoes" className="hover:text-orange-500 transition-colors">
                  Integrações
                </Link>
              </li>
              <li>
                <Link href="#precos" className="hover:text-orange-500 transition-colors">
                  Preços
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#sobre" className="hover:text-orange-500 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-orange-500 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/ajuda" className="hover:text-orange-500 transition-colors">
                  Central de Ajuda
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 konverta. Todos os direitos reservados.</p>
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

export default function LandingPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <AboutSection />
        <IntegrationsSection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
