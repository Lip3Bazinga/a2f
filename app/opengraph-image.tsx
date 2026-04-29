import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'A2F Incentivos — Transformando Imposto em Impacto Social'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1A1F3C 0%, #1B7FA6 50%, #8B3F9E 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: '50%',
            border: '60px solid rgba(255,255,255,0.06)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: '50%',
            border: '40px solid rgba(255,255,255,0.06)',
          }}
        />

        {/* Tag line */}
        <p
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: '#E8610A',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          Incentivos Fiscais · Esporte · Cultura
        </p>

        {/* Main title */}
        <h1
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: '#FFFFFF',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          A2F Incentivos
        </h1>

        {/* Sub headline */}
        <p
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: 'rgba(255,255,255,0.85)',
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Transformando Imposto em Impacto Social
        </p>

        {/* URL badge */}
        <div
          style={{
            marginTop: 48,
            padding: '12px 32px',
            background: 'rgba(255,255,255,0.12)',
            borderRadius: 50,
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          <p
            style={{
              fontSize: 20,
              color: 'rgba(255,255,255,0.75)',
              margin: 0,
            }}
          >
            www.a2f.com.br
          </p>
        </div>
      </div>
    ),
    { ...size },
  )
}
