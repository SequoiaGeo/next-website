"""Generate a static, third-party-tracker-free QR with a four-module quiet zone."""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[2] / '.tmp-clovisfest-tools'))
import qrcode
import qrcode.image.svg

target = 'https://www.sequoiageo.com/clovis'
qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, border=4, box_size=12)
qr.add_data(target)
qr.make(fit=True)
output = Path(__file__).resolve().parents[1] / 'public' / 'clovisfest-qr.svg'
qr.make_image(image_factory=qrcode.image.svg.SvgPathFillImage).save(output)
print(f'Generated {output.name}: {target}')
