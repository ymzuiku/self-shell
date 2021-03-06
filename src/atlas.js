#!/usr/bin/env node
let fs = require('fs')
require('shelljs/global')
let argv = require('yargs').argv
let pwd = process.cwd()
let str = process.argv


if (str[2] ==='v'  && !str[3]) {
	console.log(`
	k : pkill node
	code : 使用code打开self-shell项目
	ar : 覆盖模式的a命令
	cd : 显示slef-shell的路径
	ls : 显示shelf-shell的文件
	self push : push self-shell到github
	s s <name/all> : save某个项目的配置到库中(all标示所有)
	s r <name/all> : restore某个项目的配置到库中(all标示所有)
	s o <name/all> : open某个项目的配置到库中(all标示所有)
	`)
}

if (str[2] === 'k' && !str[3]) {
	exec('pkill node')
} else if (str[2] === 'code' && !str[3]) {
	exec(`code ${__dirname}/..`)
} else if (str[2] === 'cd' && !str[3]) {
	console.log(__dirname)
} else if (str[2] === 'ls' && !str[3]) {
	exec(`ls ${__dirname}/..`)
}

else if (str[2] === 'cd' && str[3] === 'git') {
	console.log(__dirname)
	cd(`${__dirname}`)
	exec(`git add .`)
	exec(`git commit --no-verify -am 'quick commit -am'`)
	exec(`git push --all`)
	console.log('------ git push end ------')
}

else if (str[2] === '.' && str[3] === 'git') {
	exec(`git add .`)
	exec(`git commit --no-verify -am 'quick commit -am'`)
	exec(`git push --all`)
	console.log('------ git push end ------')
}

if(str[2] === 'ns') {
	console.log('ifconfig en0')
	let ipstr = exec('npm start')
}


if(str[2] === 'ip') {
	console.log('ifconfig en0')
	let ipstr = exec('ifconfig en0')
}

if(str[3]==='bash') {
	exec(`${str[2]} ~/.bash_profile`)
}

if(str[3]==='vim') {
	exec(`${str[2]} ~/.vimrc`)
}

if(str[3]==='git') {
	exec(`${str[2]} ~/.gitconfig`)
}