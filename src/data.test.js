import test from 'node:test';
import assert from 'node:assert/strict';
import {projects,slideCount} from './data.js';
test('Presentation has ten slides and all project narratives are complete',()=>{assert.equal(slideCount,10);assert.equal(new Set(projects.map(p=>p.id)).size,8);for(const p of projects)for(const key of ['title','problem','role','action','output','note'])assert.ok(p[key]?.trim(),`${p.id}: ${key}`)});
test('Published evidence uses HTTPS and excludes the private surveillance repository',()=>{for(const p of projects)for(const [,url] of p.evidence)assert.equal(new URL(url).protocol,'https:');assert.equal(projects.find(p=>p.id==='surveillance').evidence.length,0)});
