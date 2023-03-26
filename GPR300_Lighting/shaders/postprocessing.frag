#version 450
out vec4 FragColor;

in vec2 uv;

uniform sampler2D _Texture1;

void main()
{
	vec3 color = texture(_Texture1, uv).rgb;
	FragColor = vec4(color, 1);
}